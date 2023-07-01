# frozen_string_literal: true

class WeighInSerializer
  def serialize(started_at:, weights:)
    {
      weigh_in_started_at: started_at,
      weights: weight_data(weights)
    }
  end

  private

  def weight_data(weights)
    weights.map do |weigh_in|
      {
        weight: weigh_in.weight,
        product_name: weigh_in.product.name,
        category: weigh_in.product.category.name
      }
    end
  end
end
