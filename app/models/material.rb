class Material < ApplicationRecord
    has_many :project_materials, dependent: :destroy
    has_many :projects, through: :project_materials

    validates :cost, numericality: { greater_than: 0 }
    validates :name, presence: true, uniqueness: true
end
