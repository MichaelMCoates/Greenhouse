# == Schema Information
#
# Table name: contributions
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  campaign_id :integer          not null
#  perk_id     :integer
#  amount      :integer          not null
#  appearance  :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Contribution < ActiveRecord::Base
  validates :user_id, :campaign_id, :amount, :appearance, presence: true

  belongs_to :user
  belongs_to :campaign

end
