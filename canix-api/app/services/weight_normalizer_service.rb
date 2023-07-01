# frozen_string_literal: true

class WeightNormalizerService
  GRAMS_TO_KILOGRAMS = 1000.0
  POUNDS_TO_KILOGRAMS = 0.453592
  GRAMS_UNIT = 'grams'
  POUNDS_UNIT = 'pounds'

  def self.to_kilogram(weight:, unit:)
    return weight.to_f / GRAMS_TO_KILOGRAMS if unit == GRAMS_UNIT
    return weight.to_f * POUNDS_TO_KILOGRAMS if unit == POUNDS_UNIT

    weight.to_f
  end
end
