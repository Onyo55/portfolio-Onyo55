# README

# テーブル設計

## Usersテーブル

| Column             | Type   | Option      | 
| ------------------ | ------ | ----------- | 
| name               | string | null: false | 
| email              | siring | null: false | 
| encrypted_password | string | null: false | 

## Association
has_many :themas
has_many :comments

## Themasテーブル

| Column     | Type       | Option      | 
| ---------- | ---------- | ----------- | 
| name       | string     | null: false | 
| sub_thema1 | string     | null: false | 
| sub_thema2 | string     | null: false | 
| user_id    | references |             | 

## Association
belongs_to :user
has_many :comments

## Commentsテーブル

| Column        | Type       | Option      | 
| ------------- | ---------- | ----------- | 
| text          | string     | null: false | 
| sub_thema_num | integer    | null: false | 
| thema_id      | references |             | 
| user_id       | references |             | 

## Association
belongs_to :user
belongs_to :thema
