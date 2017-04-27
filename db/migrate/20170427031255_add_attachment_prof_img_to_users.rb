class AddAttachmentProfImgToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :prof_img
    end
  end

  def self.down
    remove_attachment :users, :prof_img
  end
end
