class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :postal_code, :integer
    add_column :users, :tagline, :string
    add_column :users, :about_me, :text
  end
end
