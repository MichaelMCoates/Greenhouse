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

require 'test_helper'

class CampaignTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
