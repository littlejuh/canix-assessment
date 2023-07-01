# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WeightNormalizerService do
  describe '.to_kilogram' do
    it 'converts weight from grams' do
      grams = 500
      kilograms = WeightNormalizerService.to_kilogram(weight: grams, unit: 'grams')
      expect(kilograms).to eq(0.5)
    end

    it 'converts weight from pounds' do
      pounds = 2.5
      kilograms = WeightNormalizerService.to_kilogram(weight: pounds, unit: 'pounds')
      expect(kilograms).to eq(1.133980)
    end

    it 'returns the weight as is for unknown units' do
      kilograms = WeightNormalizerService.to_kilogram(weight: 3.8, unit: 'unknown')
      expect(kilograms).to eq(3.8)
    end
  end
end
