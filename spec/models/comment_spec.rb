require 'rails_helper'

RSpec.describe Comment, type: :model do
  before do
    @comment = FactoryBot.build(:comment)
  end

  describe 'コメント投稿機能' do
    context 'コメントが保存できる時' do
      it '適切な値が入力されている時保存できる' do
        expect(@comment).to be_valid
      end
    end

    context 'コメントが保存できない時' do
      it 'textが空の時は登録できない' do
        @comment.text = ''
        @comment.valid?
        expect(@comment.errors.full_messages).to include("テキストを入力してください")
      end

      it 'sub_theme_numが空の時は登録できない' do
        @comment.sub_theme_num = ''
        @comment.valid?
        expect(@comment.errors.full_messages).to include("サブテーマを入力してください")
      end

      it 'sub_theme_numが1~3以外の時は登録できない' do
        @comment.sub_theme_num = 4
        @comment.valid?
        expect(@comment.errors.full_messages).to include("サブテーマは一覧にありません")
      end

      it 'textが200文字を超えるの時は登録できない' do
        @comment.text = 'a' * 201
        @comment.valid?
        expect(@comment.errors.full_messages).to include("テキストは200文字以内で入力してください")
      end

      it 'userが紐付いていないときは登録できない' do
        @comment.user = nil
        @comment.valid?
        expect(@comment.errors.full_messages).to include("Userを入力してください")
      end

      it 'themeが紐付いていないときは登録できない' do
        @comment.theme = nil
        @comment.valid?
        expect(@comment.errors.full_messages).to include("Themeを入力してください")
      end
    end

  end
end
