class AddAttachmentTileImgToCampaigns < ActiveRecord::Migration
  def self.up
    change_table :campaigns do |t|
      t.attachment :tile_img
    end
  end

  def self.down
    remove_attachment :campaigns, :tile_img
  end
end
