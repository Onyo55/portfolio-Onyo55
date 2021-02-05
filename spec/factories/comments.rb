FactoryBot.define do
  factory :comment do
    text              {Faker::String.random(length: 1..200)}
    sub_theme_num     {Faker::Number.within(range: 1..3)}

    association :user
    association :theme
  end
end
