class CreatePerks < ActiveRecord::Migration
  def change
    create_table :perks do |t|
      t.integer :campaign_id, null: false
      t.integer :price, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :number_available, null: false
      t.date :delivery_date, null: false

      t.timestamps null: false
    end

    add_index :perks, :campaign_id

  end
end
