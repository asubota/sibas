class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|

      t.column :name, :string
      t.column :type, :string
      t.column :prev_name, :string
      t.column :district, :string
      t.column :name_ru, :string
      t.column :area, :string
      t.column :active, :boolean
      t.column :lat, :float
      t.column :lng, :float

      t.timestamps
    end
  end
end
