class Theme < ApplicationRecord
  with_options presence: true do
    validates :main_theme
    validates :sub_theme_1
    validates :sub_theme_2
  end
  
end
