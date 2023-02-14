class ApplicationController < ActionController::API
  include ActionController::Cookies
        
        rescue_from ActiveRecord::RecordNotFound, with: :not_found
        rescue_from ActiveRecord::RecordInvalid, with: :not_valid

        def not_found(invalid)
            render json: {error: "#{invalid.model} not found"}, status: :not_found
        end

        def not_valid(invalid)
            render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end

end
