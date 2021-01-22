class User < ApplicationRecord
  with_options presence: true do
    validates :name
    validates :email,                 uniqueness: { case_sensitive: false }
    validates :password,              format: { with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i }
  end
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
