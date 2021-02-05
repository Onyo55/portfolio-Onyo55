FactoryBot.define do
  factory :user do
      name                      { Faker::Name.initials(number: 5) }
      email                     { Faker::Internet.email }
      password                  { 'abc123' }
      password_confirmation     { password }
  end
end