class CreateThemes < ActiveRecord::Migration[6.0]
  def change
    create_table :themes do |t|
      t.string      :main_theme,   null: false
      t.string      :sub_theme_1,  null: false
      t.string      :sub_theme_2,  null: false
      t.references  :user,         foreign_key: true
      t.timestamps
    end
  end
end