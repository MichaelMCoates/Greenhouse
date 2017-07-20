# == Schema Information
#
# Table name: users
#
#  id                      :integer          not null, primary key
#  email                   :string           not null
#  password_digest         :string           not null
#  session_token           :string           not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  first_name              :string           not null
#  last_name               :string           not null
#  avatar_img_file_name    :string
#  avatar_img_content_type :string
#  avatar_img_file_size    :integer
#  avatar_img_updated_at   :datetime
#  city                    :string
#  country                 :string
#  postal_code             :integer
#  tagline                 :string
#  about_me                :text
#  prof_img_file_name      :string
#  prof_img_content_type   :string
#  prof_img_file_size      :integer
#  prof_img_updated_at     :datetime
#

class User < ActiveRecord::Base
  validates :email, presence: true, uniqueness: true, :email_format => { :message => 'must be a valid email address!'}
  validates :password_digest, presence: { message: "Password can't be blank"}
  validates :first_name, :last_name, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password

  has_attached_file :avatar_img, default_url: "greenhouse-user-avatar.png"
  validates_attachment_content_type :avatar_img, content_type: /\Aimage\/.*\Z/

  has_attached_file :prof_img, default_url: "gh-prof-img.png"
  validates_attachment_content_type :prof_img, content_type: /\Aimage\/.*\Z/

  has_many :campaigns
  has_many :contributions

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def founded_campaigns_and_user
    self.campaigns.order('created_at DESC').includes(:user)
  end

  def funded_campaigns_and_user
    self.contributions.includes(campaign: :user)
  end
end
