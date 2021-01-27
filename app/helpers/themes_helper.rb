module ThemesHelper
  def sub_theme_color(comment)
    if comment.sub_theme_num == 1
      "blue"
    elsif comment.sub_theme_num == 2
      "red"
    else
      "pur"
    end
  end
end
