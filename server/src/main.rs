use axum::{
    // extract::{FromRef, FromRequestParts, State},
    // body::{Body, Bytes},
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::get,
    Router,
    Json
};
use serde::Serialize;
// use serde_json::json;
use bb8::{Pool, PooledConnection};
use bb8_postgres::PostgresConnectionManager;
use bb8_postgres::tokio_postgres::NoTls;
use chrono::Datelike;

#[derive(Serialize)]
pub struct ApiResponse {
    pub created: String,
    pub msg: String,
}

#[derive(Debug)]
pub enum ApiError {
    BadRequest(String),
    NotFound,
    InternalError,
}
#[derive(Serialize)]
struct ErrorResponse {
    error: String,
}

impl IntoResponse for ApiError {
    fn into_response(self) -> Response {
        match self {
            ApiError::BadRequest(msg) => (
                StatusCode::BAD_REQUEST,
                Json(ErrorResponse { error: msg }),
            )
                .into_response(),

            ApiError::NotFound => (
                StatusCode::NOT_FOUND,
                Json(ErrorResponse {
                    error: "resource not found".into(),
                }),
            )
                .into_response(),

            ApiError::InternalError => (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse {
                    error: "internal server error".into(),
                }),
            )
                .into_response(),
        }
    }
}
//How to use Response builder
//Result<ApiResponse, ApiError>
//   // Response::builder()
//     //     .status(StatusCode::OK)
//     //     .header("content-type", "application/json")
//     //     .body(body)
//     //     .unwrap()
async fn generate_idea() ->Result<impl IntoResponse, ApiError>{
    let foo = "bar".to_string();//Generic Value
    // Simulate validation / business logic
    if foo.is_empty() {
        return Err(ApiError::BadRequest("foo cannot be empty".into()));
    }
    let current_date = chrono::Utc::now();
    Ok(Json(ApiResponse { created: format!("{}-{}-{}",current_date.year(),current_date.month(),current_date.day()), msg: foo }))
}
//192.168.0.140:5432 rcsdev
#[tokio::main]
async fn main() {

    let manager =
        PostgresConnectionManager::new_from_stringlike("host=X user=X", NoTls)
            .unwrap();
    let pool = Pool::builder().build(manager).await.unwrap();



    let app = Router::new().route("/generate", get(generate_idea)).with_state(pool);

    // run our app with hyper, listening globally on port 3000
    let listener = tokio::net::TcpListener::bind("0.0.0.0:4000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}