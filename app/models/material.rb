class Material < ApplicationRecord
    has_many :project_materials, dependent: :destroy
    has_many :projects, through: :project_materials
end
