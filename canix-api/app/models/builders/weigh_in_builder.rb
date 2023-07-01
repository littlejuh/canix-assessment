# frozen_string_literal: true

module Builders
  class WeighInBuilder
    def self.build(weight:, unit:, date:, product_id:, import_id:)
      WeighIn.create(weight: WeightNormalizerService.to_kilogram(weight: weight.to_f, unit: unit),
                     date: date,
                     product_id: product_id,
                     import_id: import_id)
    end
  end
end
