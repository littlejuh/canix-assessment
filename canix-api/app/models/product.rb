# frozen_string_literal: true

class Product < ApplicationRecord
  has_many :weigh_ins
  belongs_to :category
end
