class RemoveCategoryFromUsersAddToCampaigns < ActiveRecord::Migration
  def change
    remove_column :users, :category, :string
    add_column :campaigns, :category, :string
  end
end
