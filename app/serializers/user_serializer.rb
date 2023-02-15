class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :role
  has_many :pending_projects, if: -> { self.object.client? }


end
