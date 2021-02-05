class Comment < ApplicationRecord
  with_options presence: true do
    validates :text,length: {maximum: 200}
    validates :sub_theme_num, numericality: { only_integer: true }, inclusion: { in: 1..3 }
  end

  belongs_to :user
  belongs_to :theme
end
