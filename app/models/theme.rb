class Theme < ApplicationRecord
  with_options presence: true do
    validates :mail_theme
    validates :sub_theme_1
    validates :sub_theme_2
  end
  
end
