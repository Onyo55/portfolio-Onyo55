class Theme < ApplicationRecord
  with_options presence: true do
    validates :main_theme, length: {maximum: 50}
    validates :sub_theme_1, length: {maximum: 20}
    validates :sub_theme_2, length: {maximum: 20}
  end

  belongs_to :user
  has_many :comments
end
