class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.integer :user_id, null: false
      t.integer :goal_amt, null: false
      t.integer :current_amt, null: false
      t.string :title, null: false
      t.text :tagline, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.integer :duration, null: false
      t.text :overview, null: false
      t.text :campaign_story, null: false


      t.timestamps null: false
    end

    add_index :campaigns, :user_id
  end
end
