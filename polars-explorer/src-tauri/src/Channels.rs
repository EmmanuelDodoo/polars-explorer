use tauri::ipc::Channel;
use crate::Payload::{JSONValue, PageInfo, DataFrameInfo, DataInfo};

pub type DataChannel = Channel<JSONValue>;
pub type PageChannel = Channel<PageInfo>;
pub type InfoChannel = Channel<DataInfo>;

