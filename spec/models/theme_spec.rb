require 'rails_helper'

RSpec.describe Theme, type: :model do
  before do
    @theme = FactoryBot.build(:theme)
  end

  describe 'テーマ投稿機能' do
    context 'テーマ情報が保存できるとき' do
      it '@themeが適切な値を持つとき保存できる' do
        expect(@theme).to be_valid
      end
    end

    context 'テーマ情報が保存できないとき' do
      # 以下、特定の値が空の場合
      it 'main_themeが空だと登録できない'do
        @theme.main_theme = ''
        @theme.valid?
        expect(@theme.errors.full_messages).to include("メインテーマを入力してください")
      end

      it 'sub_theme_1が空だと登録できない'do
        @theme.sub_theme_1 = ''
        @theme.valid?
        expect(@theme.errors.full_messages).to include("サブテーマ1を入力してください")
      end

      it 'sub_theme_2が空だと登録できない'do
        @theme.sub_theme_2 = ''
        @theme.valid?
        expect(@theme.errors.full_messages).to include("サブテーマ2を入力してください")
      end
      #以下、文字数制限のテスト
      it 'main_themeが50文字より多いと登録できない'do
        @theme.main_theme = "a" * 51
        @theme.valid?
        expect(@theme.errors.full_messages).to include("メインテーマは50文字以内で入力してください")
      end

      it 'sub_theme_1が20文字より多いと登録できない'do
        @theme.sub_theme_1 = 'a' * 21
        @theme.valid?
        expect(@theme.errors.full_messages).to include("サブテーマ1は20文字以内で入力してください")
      end

      it 'main_theme_2が20文字より多いと登録できない'do
        @theme.sub_theme_2 = 'a' * 21
        @theme.valid?
        expect(@theme.errors.full_messages).to include("サブテーマ2は20文字以内で入力してください")
      end
      # アソシエーションのテスト
      it 'userが紐付いていないときは登録できない' do
        @theme.user = nil
        @theme.valid?
        expect(@theme.errors.full_messages).to include("Userを入力してください")
      end
    end

  end
end
