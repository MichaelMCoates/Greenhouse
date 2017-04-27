class AddAttachmentPitchImgToCampaigns < ActiveRecord::Migration
  def self.up
    change_table :campaigns do |t|
      t.attachment :pitch_img
    end
  end

  def self.down
    remove_attachment :campaigns, :pitch_img
  end
end
