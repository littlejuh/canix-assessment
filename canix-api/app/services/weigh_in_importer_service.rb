# frozen_string_literal: true

require 'csv'
class WeighInImporterService
  def self.import(file:, import_id:)
    CSV.foreach(file, headers: true) do |row|
      category_name, id = row['product_id'].split('-')
      category = Category.find_or_create_by(name: category_name)
      product = Product.find_or_create_by(name: id, category: category)
      weigh_in = Builders::WeighInBuilder.build(weight: row['weight'], unit: row['unit'], date: row['date'], product_id: product.id,
                                                import_id: import_id)

      weigh_in.save
    rescue CSV::MalformedCSVError => e
      handle_csv_error(e)
    end
  end

  def self.handle_csv_error(error)
    Rails.logger.error("#{error.class} error: #{error.message}")
    raise ActionController::BadRequest, 'Bad Request'
  end
end
