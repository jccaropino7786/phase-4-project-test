class ProjectMaterial < ApplicationRecord
  
  belongs_to :material
  belongs_to :project

  validates :quantity, numericality: { greater_than: 0 }
  
end

