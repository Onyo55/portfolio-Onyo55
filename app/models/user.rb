class User < ApplicationRecord
  with_options presence: true do
    validates :name
    validates :email,                 uniqueness: { case_sensitive: false }
    validates :password,              format: { with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i }
  end

  has_many :themes
  has_many :comments

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
