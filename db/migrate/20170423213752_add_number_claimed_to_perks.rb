class AddNumberClaimedToPerks < ActiveRecord::Migration
  def change
    add_column :perks, :number_claimed, :integer, default: 0
  end
end
