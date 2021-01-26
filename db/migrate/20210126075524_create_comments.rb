class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string      :text,          null: false
      t.integer     :sub_theme_num, null: false
      t.references  :user,          foreign_key:true
      t.references  :theme,         foreign_key:true
      t.timestamps
    end
  end
end
