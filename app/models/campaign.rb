# == Schema Information
#
# Table name: campaigns
#
#  id                        :integer          not null, primary key
#  user_id                   :integer          not null
#  goal_amt                  :integer          not null
#  current_amt               :integer          not null
#  title                     :string           not null
#  tagline                   :text             not null
#  city                      :string           not null
#  country                   :string           not null
#  duration                  :integer          not null
#  overview                  :text             not null
#  campaign_story            :text             not null
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#  tile_img_file_name        :string
#  tile_img_content_type     :string
#  tile_img_file_size        :integer
#  tile_img_updated_at       :datetime
#  overview_img_file_name    :string
#  overview_img_content_type :string
#  overview_img_file_size    :integer
#  overview_img_updated_at   :datetime
#  pitch_img_file_name       :string
#  pitch_img_content_type    :string
#  pitch_img_file_size       :integer
#  pitch_img_updated_at      :datetime
#

class Campaign < ActiveRecord::Base
  validates :user_id, :goal_amt, :current_amt, :title, :tagline, :city, :country, :duration, :overview, :campaign_story, presence: true

  belongs_to :user, inverse_of: :campaigns
  has_many :contributions, inverse_of: :campaign

  has_many :perks, inverse_of: :campaign
  accepts_nested_attributes_for :perks, allow_destroy: true

  has_attached_file :tile_img, default_url: "gh-tile-img.png"
  validates_attachment_content_type :tile_img, content_type: /\Aimage\/.*\Z/

  has_attached_file :overview_img, default_url: "gh-overview-img.png"
  validates_attachment_content_type :overview_img, content_type: /\Aimage\/.*\Z/

  has_attached_file :pitch_img, default_url: "gh-pitch-img.png"
  validates_attachment_content_type :pitch_img, content_type: /\Aimage\/.*\Z/

  def add_to_current_amount(num)
    self.current_amt += num
    self.save!
  end
end
