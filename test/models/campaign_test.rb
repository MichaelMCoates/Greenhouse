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

require 'test_helper'

class CampaignTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
