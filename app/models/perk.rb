# == Schema Information
#
# Table name: perks
#
#  id               :integer          not null, primary key
#  campaign_id      :integer          not null
#  price            :integer          not null
#  title            :string           not null
#  description      :text             not null
#  number_available :integer          not null
#  delivery_date    :date             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  number_claimed   :integer          default("0")
#

class Perk < ActiveRecord::Base
  validates :campaign_id, :price, :title, :description, :number_available, :delivery_date, presence: true

  belongs_to :campaign
  has_many :contributions

  def available?
    self.number_available > self.number_claimed
  end

  def purchase!
    self.number_claimed += 1
    self.save!
  end

end
