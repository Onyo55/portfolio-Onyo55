# アプリケーション名
varytweet

# 概要
テーマごとに意見を出し合えるアプリケーションです

# URL
https://varytweet-portfolio.herokuapp.com/


# テスト用アカウント
メールアドレス： test@test  
パスワード：abc123

# 利用方法
テーマ投稿画面にてメインテーマとサブテーマを決めて投稿します。  
投稿されたテーマないで支持するサブテーマを選択してコメントを投稿します。

# 目指した課題解決
情報の偏りを減らす。  自分とは異なる方向からの意見をあつめる。

# 洗い出した要件
| 優先順位 <br>高：3中：2低：1 | 機能                 | 目的                               | 詳細                                                                                                       | ストーリー(ユースケース)                                                                                                               | 見積もり（所要時間） | 
| ----------------------------------- | -------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | 
| 3                                   | テーマ投稿機能       | 目当てのコメントを探しやすくする   | メインテーマとサブテーマが定められ、テーマ詳細ページでコメントができる                                     | ・メインテーマとサブテーマを二つ入力するフォームを儲ける                                                                               | 8                    | 
| 3                                   | コメント投稿機能     | コメントに画像をつける             | 支持するサブテーマごとに色をつけてコメントできる                                                           | ・テーマが投稿されていることが前提<br><br>・必要な情報が入力されると、投稿ボタンが押せるようになる<br><br>・非同期通信での投稿ができる | 8                    | 
| 3                                   | コメント並び替え機能 | コメントに評価をつける             | ・時系列順でコメントを並べ変えることができる<br><br>・コメントの色が連続したいように並べ換えることもできる | ・ボタンを押すとボタンの内容通りにコメントが並び変わる                                                                                 | 8                    | 
| 2                                   | 画像投稿機能         | コメントに画像をつける             | 画像付きコメントを投稿することができる                                                                     | ・コメント投稿フォームから画像を選択して投稿することができる                                                                           | 6                    | 
| 2                                   | いいね機能           | コメントに評価をつける             | コメント一つにつき一回いいねできる                                                                         | ・コメントにいいねボタンを設ける<br><br>・いいねしているときはボタンの表示を変える                                                     | 6                    | 
| 2                                   | フォロー機能         | 好きなテーマをフォローしてまとめる | フォローしたテーマがマイページで一覧表示される                                                             | ・テーマ詳細ページにフォローボタンを設ける<br><br>・マイページにフォロー一覧ページを設ける                                             | 8                    | 

# 実装予定の機能
- いいね機能
- 画像投稿機能
- フォロー機能

# ローカルでの動作方法
git clone https://github.com/Onyo55/varytweet-portfolio.git  
cd varytweet-portfolio  
bundle install  
rails db:create  
rails db:migrate  
rails s  

# 開発環境
Ruby 6.0.0  
Ruby on Rails  
MySQL  
Visual Studio Code  
Heroku

# テーブル設計

## Usersテーブル

| Column             | Type   | Option      | 
| ------------------ | ------ | ----------- | 
| name               | string | null: false | 
| email              | siring | null: false | 
| encrypted_password | string | null: false | 

## Association
has_many :themes
has_many :comments

## Themesテーブル

| Column            | Type       | Option           | 
| ----------------- | ---------- | -----------------| 
| main_theme        | string     | null: false      | 
| sub_theme_1       | string     | null: false      | 
| sub_theme_2       | string     | null: false      | 
| user_id           |references  | foreign_key:true | 

## Association
belongs_to :user
has_many :comments

## Commentsテーブル

| Column        | Type       | Option           | 
| ------------- | ---------- | ---------------- | 
| text          | string     | null: false      | 
| sub_theme_num | integer    | null: false      | 
| theme_id      | references | foreign_key:true | 
| user_id       | references | foreign_key:true | 

## Association
belongs_to :user
belongs_to :theme
