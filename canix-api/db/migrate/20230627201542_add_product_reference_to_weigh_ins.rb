# frozen_string_literal: true

class AddProductReferenceToWeighIns < ActiveRecord::Migration[7.0]
  def change
    add_reference :weigh_ins, :product, null: false, foreign_key: true
  end
end
