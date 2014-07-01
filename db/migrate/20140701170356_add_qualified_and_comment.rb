class AddQualifiedAndComment < ActiveRecord::Migration
  def change
    add_column :teams, :qualified, :string
    add_column :teams, :comment, :text
  end
end
