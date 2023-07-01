# frozen_string_literal: true

module Api
  class ImportsController < Api::ApiController
    def show_weigh_in
      weights = WeighIn.includes(product: :category).where(import_id: params[:id]).all
      return render json: { error: 'weigh in not found' }, status: :not_found if weights.empty?

      render json: WeighInSerializer.new.serialize(started_at: weights.min_by(&:date).date,
                                                   weights: weights), status: :ok
    end

    def create_weigh_in
      WeighInImporterService.import(file: params[:file], import_id: params[:id])
      render json: { message: 'file imported successfully.' }
    rescue ActionController::BadRequest => e
      render json: { error: e.message }, status: :bad_request
    end
  end
end
