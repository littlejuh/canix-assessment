# frozen_string_literal: true

class CreateWeighIns < ActiveRecord::Migration[7.0]
  def change
    create_table :weigh_ins do |t|
      t.decimal :weight, precision: 8, scale: 3
      t.datetime :date
      t.string :import_id

      t.timestamps
    end
  end
end
