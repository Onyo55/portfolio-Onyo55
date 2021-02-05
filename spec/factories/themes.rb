FactoryBot.define do
  factory :theme do
    main_theme    {Faker::String.random(length: 1..50)}
    sub_theme_1   {Faker::String.random(length: 1..20)}
    sub_theme_2   {Faker::String.random(length: 1..20)}

    association :user
  end
end
