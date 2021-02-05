class Comment < ApplicationRecord
  validates :text, presence: true
  validates :sub_theme_num, numericality: { only_integer: true }

  belongs_to :user
  belongs_to :theme
end
