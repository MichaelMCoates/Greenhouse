class AddAttachmentAvatarImgToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :avatar_img
    end
  end

  def self.down
    remove_attachment :users, :avatar_img
  end
end
