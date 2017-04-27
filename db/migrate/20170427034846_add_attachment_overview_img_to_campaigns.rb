class AddAttachmentOverviewImgToCampaigns < ActiveRecord::Migration
  def self.up
    change_table :campaigns do |t|
      t.attachment :overview_img
    end
  end

  def self.down
    remove_attachment :campaigns, :overview_img
  end
end
