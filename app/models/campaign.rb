# == Schema Information
#
# Table name: campaigns
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  goal_amt       :integer          not null
#  current_amt    :integer          not null
#  title          :string           not null
#  tagline        :text             not null
#  city           :string           not null
#  country        :string           not null
#  duration       :integer          not null
#  overview       :text             not null
#  campaign_story :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Campaign < ActiveRecord::Base
  validates :user_id, :goal_amt, :current_amt, :title, :tagline, :city, :country, :duration, :overview, :campaign_story, presence: true

  belongs_to :user
  has_many :contributions


  def add_contribution_amount(amount)
    self.current_amt += amount
    self.save!
  end
end
