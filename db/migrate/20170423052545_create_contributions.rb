class CreateContributions < ActiveRecord::Migration
  def change
    create_table :contributions do |t|
      t.integer :user_id, null: false
      t.integer :campaign_id, null: false
      t.integer :perk_id
      t.integer :amount, null: false
      t.string :appearance, null: false

      t.timestamps null: false
    end

    add_index :contributions, :user_id
    add_index :contributions, :campaign_id
    add_index :contributions, :perk_id

  end
end
