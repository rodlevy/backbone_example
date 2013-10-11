class AddPurchasedToServices < ActiveRecord::Migration
  def change
    add_column :services, :purchased, :string
  end
end
