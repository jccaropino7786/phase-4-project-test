class ProjectMaterial < ApplicationRecord
  
  belongs_to :material
  belongs_to :project

  validates :quantity, numericality: { greater_than: 0 }
  validates :material_id, presence: true
  validates :project_id, presence: true
  
end

